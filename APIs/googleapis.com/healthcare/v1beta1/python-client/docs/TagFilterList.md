# TagFilterList

List of tags to be filtered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **List[str]** | Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by \&quot;Keyword\&quot; or \&quot;Tag\&quot;. For example, \&quot;PatientID\&quot;, \&quot;00100010\&quot;. | [optional] 

## Example

```python
from openapi_client.models.tag_filter_list import TagFilterList

# TODO update the JSON string below
json = "{}"
# create an instance of TagFilterList from a JSON string
tag_filter_list_instance = TagFilterList.from_json(json)
# print the JSON string representation of the object
print(TagFilterList.to_json())

# convert the object into a dict
tag_filter_list_dict = tag_filter_list_instance.to_dict()
# create an instance of TagFilterList from a dict
tag_filter_list_from_dict = TagFilterList.from_dict(tag_filter_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


