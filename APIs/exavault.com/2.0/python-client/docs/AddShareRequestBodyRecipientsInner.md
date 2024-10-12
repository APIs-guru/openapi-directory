# AddShareRequestBodyRecipientsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address of person you are inviting to the share | [optional] 
**type** | **str** | What kind of email should be sent to this recipient. Valid choices are **direct** and **cc** | [optional] 

## Example

```python
from openapi_client.models.add_share_request_body_recipients_inner import AddShareRequestBodyRecipientsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddShareRequestBodyRecipientsInner from a JSON string
add_share_request_body_recipients_inner_instance = AddShareRequestBodyRecipientsInner.from_json(json)
# print the JSON string representation of the object
print(AddShareRequestBodyRecipientsInner.to_json())

# convert the object into a dict
add_share_request_body_recipients_inner_dict = add_share_request_body_recipients_inner_instance.to_dict()
# create an instance of AddShareRequestBodyRecipientsInner from a dict
add_share_request_body_recipients_inner_from_dict = AddShareRequestBodyRecipientsInner.from_dict(add_share_request_body_recipients_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


