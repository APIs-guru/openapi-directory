# NoContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | A human readable description of the error AAA | [optional] 
**message** | **str** | A longer description of the error BBB | [optional] 
**status** | **int** | The HTTP Status code of the error | [optional] 

## Example

```python
from openapi_client.models.no_content import NoContent

# TODO update the JSON string below
json = "{}"
# create an instance of NoContent from a JSON string
no_content_instance = NoContent.from_json(json)
# print the JSON string representation of the object
print(NoContent.to_json())

# convert the object into a dict
no_content_dict = no_content_instance.to_dict()
# create an instance of NoContent from a dict
no_content_from_dict = NoContent.from_dict(no_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


