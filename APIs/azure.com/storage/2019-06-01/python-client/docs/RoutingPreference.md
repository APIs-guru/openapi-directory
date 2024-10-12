# RoutingPreference

Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publish_internet_endpoints** | **bool** | A boolean flag which indicates whether internet routing storage endpoints are to be published | [optional] 
**publish_microsoft_endpoints** | **bool** | A boolean flag which indicates whether microsoft routing storage endpoints are to be published | [optional] 
**routing_choice** | **str** | Routing Choice defines the kind of network routing opted by the user. | [optional] 

## Example

```python
from openapi_client.models.routing_preference import RoutingPreference

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingPreference from a JSON string
routing_preference_instance = RoutingPreference.from_json(json)
# print the JSON string representation of the object
print(RoutingPreference.to_json())

# convert the object into a dict
routing_preference_dict = routing_preference_instance.to_dict()
# create an instance of RoutingPreference from a dict
routing_preference_from_dict = RoutingPreference.from_dict(routing_preference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


