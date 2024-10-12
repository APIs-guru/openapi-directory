# GovernmentIds125

Government id’s may be required in certain markets. The partner must provide where applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**government_id_uri** | **List[str]** | URI describing the government id. [see Government ID URIs] | [optional] 

## Example

```python
from openapi_client.models.government_ids125 import GovernmentIds125

# TODO update the JSON string below
json = "{}"
# create an instance of GovernmentIds125 from a JSON string
government_ids125_instance = GovernmentIds125.from_json(json)
# print the JSON string representation of the object
print(GovernmentIds125.to_json())

# convert the object into a dict
government_ids125_dict = government_ids125_instance.to_dict()
# create an instance of GovernmentIds125 from a dict
government_ids125_from_dict = GovernmentIds125.from_dict(government_ids125_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


