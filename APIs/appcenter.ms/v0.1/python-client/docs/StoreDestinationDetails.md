# StoreDestinationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | app id of application. | [optional] 
**dest_publish_id** | **str** | destination ID identifying a unique id in distribution store. | [optional] 
**store_type** | **str** | type of store. | [optional] 

## Example

```python
from openapi_client.models.store_destination_details import StoreDestinationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StoreDestinationDetails from a JSON string
store_destination_details_instance = StoreDestinationDetails.from_json(json)
# print the JSON string representation of the object
print(StoreDestinationDetails.to_json())

# convert the object into a dict
store_destination_details_dict = store_destination_details_instance.to_dict()
# create an instance of StoreDestinationDetails from a dict
store_destination_details_from_dict = StoreDestinationDetails.from_dict(store_destination_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


