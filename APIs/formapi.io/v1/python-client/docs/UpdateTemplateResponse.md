# UpdateTemplateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.update_template_response import UpdateTemplateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTemplateResponse from a JSON string
update_template_response_instance = UpdateTemplateResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateTemplateResponse.to_json())

# convert the object into a dict
update_template_response_dict = update_template_response_instance.to_dict()
# create an instance of UpdateTemplateResponse from a dict
update_template_response_from_dict = UpdateTemplateResponse.from_dict(update_template_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


