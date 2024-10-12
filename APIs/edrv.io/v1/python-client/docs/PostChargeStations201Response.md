# PostChargeStations201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chargestation** | **object** |  | [optional] 
**message** | **str** |  | [optional] 
**ok** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.post_charge_stations201_response import PostChargeStations201Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostChargeStations201Response from a JSON string
post_charge_stations201_response_instance = PostChargeStations201Response.from_json(json)
# print the JSON string representation of the object
print(PostChargeStations201Response.to_json())

# convert the object into a dict
post_charge_stations201_response_dict = post_charge_stations201_response_instance.to_dict()
# create an instance of PostChargeStations201Response from a dict
post_charge_stations201_response_from_dict = PostChargeStations201Response.from_dict(post_charge_stations201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


