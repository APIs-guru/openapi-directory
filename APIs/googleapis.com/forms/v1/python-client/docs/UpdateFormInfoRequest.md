# UpdateFormInfoRequest

Update Form's Info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**Info**](Info.md) |  | [optional] 
**update_mask** | **str** | Required. Only values named in this mask are changed. At least one field must be specified. The root &#x60;info&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for updating every field. | [optional] 

## Example

```python
from openapi_client.models.update_form_info_request import UpdateFormInfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFormInfoRequest from a JSON string
update_form_info_request_instance = UpdateFormInfoRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateFormInfoRequest.to_json())

# convert the object into a dict
update_form_info_request_dict = update_form_info_request_instance.to_dict()
# create an instance of UpdateFormInfoRequest from a dict
update_form_info_request_from_dict = UpdateFormInfoRequest.from_dict(update_form_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


