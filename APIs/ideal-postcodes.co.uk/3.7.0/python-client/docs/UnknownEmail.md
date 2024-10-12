# UnknownEmail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catchall** | **bool** | Catch-all status is not known | 
**deliverable** | **bool** | Deliverability is not known | 
**disposable** | **bool** | Disposability is not known | 
**free** | **bool** | Free email provider is not known | 
**result** | **str** |  | 
**role** | **bool** | Role is not known | 

## Example

```python
from openapi_client.models.unknown_email import UnknownEmail

# TODO update the JSON string below
json = "{}"
# create an instance of UnknownEmail from a JSON string
unknown_email_instance = UnknownEmail.from_json(json)
# print the JSON string representation of the object
print(UnknownEmail.to_json())

# convert the object into a dict
unknown_email_dict = unknown_email_instance.to_dict()
# create an instance of UnknownEmail from a dict
unknown_email_from_dict = UnknownEmail.from_dict(unknown_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


