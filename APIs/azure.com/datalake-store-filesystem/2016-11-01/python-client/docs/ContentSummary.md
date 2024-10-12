# ContentSummary

Data Lake Store content summary information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory_count** | **int** | the number of directories. | [optional] [readonly] 
**file_count** | **int** | the number of files. | [optional] [readonly] 
**length** | **int** | the number of bytes used by the content. | [optional] [readonly] 
**space_consumed** | **int** | the disk space consumed by the content. | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_summary import ContentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSummary from a JSON string
content_summary_instance = ContentSummary.from_json(json)
# print the JSON string representation of the object
print(ContentSummary.to_json())

# convert the object into a dict
content_summary_dict = content_summary_instance.to_dict()
# create an instance of ContentSummary from a dict
content_summary_from_dict = ContentSummary.from_dict(content_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


