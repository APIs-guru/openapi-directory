# UpdateEmailListRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | Email addresses that replace existing list. | [optional] 
**name** | **str** | Name of the email list. | [optional] 

## Example

```python
from openapi_client.models.update_email_list_request_body import UpdateEmailListRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEmailListRequestBody from a JSON string
update_email_list_request_body_instance = UpdateEmailListRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateEmailListRequestBody.to_json())

# convert the object into a dict
update_email_list_request_body_dict = update_email_list_request_body_instance.to_dict()
# create an instance of UpdateEmailListRequestBody from a dict
update_email_list_request_body_from_dict = UpdateEmailListRequestBody.from_dict(update_email_list_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


