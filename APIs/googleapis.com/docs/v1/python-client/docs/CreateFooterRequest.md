# CreateFooterRequest

Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**section_break_location** | [**Location**](Location.md) |  | [optional] 
**type** | **str** | The type of footer to create. | [optional] 

## Example

```python
from openapi_client.models.create_footer_request import CreateFooterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFooterRequest from a JSON string
create_footer_request_instance = CreateFooterRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFooterRequest.to_json())

# convert the object into a dict
create_footer_request_dict = create_footer_request_instance.to_dict()
# create an instance of CreateFooterRequest from a dict
create_footer_request_from_dict = CreateFooterRequest.from_dict(create_footer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


