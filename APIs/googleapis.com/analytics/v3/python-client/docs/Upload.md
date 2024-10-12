# Upload

Metadata returned for an upload operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account Id to which this upload belongs. | [optional] 
**custom_data_source_id** | **str** | Custom data source Id to which this data import belongs. | [optional] 
**errors** | **List[str]** | Data import errors collection. | [optional] 
**id** | **str** | A unique ID for this upload. | [optional] 
**kind** | **str** | Resource type for Analytics upload. | [optional] [default to 'analytics#upload']
**status** | **str** | Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED. | [optional] 
**upload_time** | **datetime** | Time this file is uploaded. | [optional] 

## Example

```python
from openapi_client.models.upload import Upload

# TODO update the JSON string below
json = "{}"
# create an instance of Upload from a JSON string
upload_instance = Upload.from_json(json)
# print the JSON string representation of the object
print(Upload.to_json())

# convert the object into a dict
upload_dict = upload_instance.to_dict()
# create an instance of Upload from a dict
upload_from_dict = Upload.from_dict(upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


