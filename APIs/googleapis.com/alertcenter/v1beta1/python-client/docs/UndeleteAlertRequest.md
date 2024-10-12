# UndeleteAlertRequest

A request to undelete a specific alert that was marked for deletion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The &#x60;customer_id&#x60; must have the initial \&quot;C\&quot; stripped (for example, &#x60;046psxkn&#x60;). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). | [optional] 

## Example

```python
from openapi_client.models.undelete_alert_request import UndeleteAlertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteAlertRequest from a JSON string
undelete_alert_request_instance = UndeleteAlertRequest.from_json(json)
# print the JSON string representation of the object
print(UndeleteAlertRequest.to_json())

# convert the object into a dict
undelete_alert_request_dict = undelete_alert_request_instance.to_dict()
# create an instance of UndeleteAlertRequest from a dict
undelete_alert_request_from_dict = UndeleteAlertRequest.from_dict(undelete_alert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


