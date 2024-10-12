# StoresDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution store. | [optional] 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | A status identifying the status of release in the distribution store. | [optional] 
**type** | **str** | A type identifying the type of distribution store. | [optional] 

## Example

```python
from openapi_client.models.stores_details import StoresDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StoresDetails from a JSON string
stores_details_instance = StoresDetails.from_json(json)
# print the JSON string representation of the object
print(StoresDetails.to_json())

# convert the object into a dict
stores_details_dict = stores_details_instance.to_dict()
# create an instance of StoresDetails from a dict
stores_details_from_dict = StoresDetails.from_dict(stores_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


