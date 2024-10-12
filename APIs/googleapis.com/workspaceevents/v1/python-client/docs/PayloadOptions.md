# PayloadOptions

Options about what data to include in the event payload. Only supported for Google Chat events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_mask** | **str** | Optional. If &#x60;include_resource&#x60; is set to &#x60;true&#x60;, the list of fields to include in the event payload. Separate fields with a comma. For example, to include a Google Chat message&#39;s sender and create time, enter &#x60;message.sender,message.createTime&#x60;. If omitted, the payload includes all fields for the resource. If you specify a field that doesn&#39;t exist for the resource, the system ignores the field. | [optional] 
**include_resource** | **bool** | Optional. Whether the event payload includes data about the resource that changed. For example, for an event where a Google Chat message was created, whether the payload contains data about the [&#x60;Message&#x60;](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages) resource. If false, the event payload only includes the name of the changed resource. | [optional] 

## Example

```python
from openapi_client.models.payload_options import PayloadOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PayloadOptions from a JSON string
payload_options_instance = PayloadOptions.from_json(json)
# print the JSON string representation of the object
print(PayloadOptions.to_json())

# convert the object into a dict
payload_options_dict = payload_options_instance.to_dict()
# create an instance of PayloadOptions from a dict
payload_options_from_dict = PayloadOptions.from_dict(payload_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


