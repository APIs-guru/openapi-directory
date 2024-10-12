# LinkedContentReference

A reference to the external linked source content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sheets_chart_reference** | [**SheetsChartReference**](SheetsChartReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.linked_content_reference import LinkedContentReference

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedContentReference from a JSON string
linked_content_reference_instance = LinkedContentReference.from_json(json)
# print the JSON string representation of the object
print(LinkedContentReference.to_json())

# convert the object into a dict
linked_content_reference_dict = linked_content_reference_instance.to_dict()
# create an instance of LinkedContentReference from a dict
linked_content_reference_from_dict = LinkedContentReference.from_dict(linked_content_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


