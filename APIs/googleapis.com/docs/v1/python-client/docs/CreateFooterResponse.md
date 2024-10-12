# CreateFooterResponse

The result of creating a footer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**footer_id** | **str** | The ID of the created footer. | [optional] 

## Example

```python
from openapi_client.models.create_footer_response import CreateFooterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFooterResponse from a JSON string
create_footer_response_instance = CreateFooterResponse.from_json(json)
# print the JSON string representation of the object
print(CreateFooterResponse.to_json())

# convert the object into a dict
create_footer_response_dict = create_footer_response_instance.to_dict()
# create an instance of CreateFooterResponse from a dict
create_footer_response_from_dict = CreateFooterResponse.from_dict(create_footer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


