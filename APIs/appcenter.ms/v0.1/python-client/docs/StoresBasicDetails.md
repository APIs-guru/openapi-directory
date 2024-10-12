# StoresBasicDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | [optional] 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune or googleplay. | [optional] 

## Example

```python
from openapi_client.models.stores_basic_details import StoresBasicDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StoresBasicDetails from a JSON string
stores_basic_details_instance = StoresBasicDetails.from_json(json)
# print the JSON string representation of the object
print(StoresBasicDetails.to_json())

# convert the object into a dict
stores_basic_details_dict = stores_basic_details_instance.to_dict()
# create an instance of StoresBasicDetails from a dict
stores_basic_details_from_dict = StoresBasicDetails.from_dict(stores_basic_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


