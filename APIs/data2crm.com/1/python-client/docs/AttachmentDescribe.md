# AttachmentDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.attachment_describe import AttachmentDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentDescribe from a JSON string
attachment_describe_instance = AttachmentDescribe.from_json(json)
# print the JSON string representation of the object
print(AttachmentDescribe.to_json())

# convert the object into a dict
attachment_describe_dict = attachment_describe_instance.to_dict()
# create an instance of AttachmentDescribe from a dict
attachment_describe_from_dict = AttachmentDescribe.from_dict(attachment_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


