# AlertMetadata

An alert metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **str** | Output only. The alert identifier. | [optional] 
**assignee** | **str** | The email address of the user assigned to the alert. | [optional] 
**customer_id** | **str** | Output only. The unique identifier of the Google Workspace account of the customer. | [optional] 
**etag** | **str** | Optional. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no &#x60;etag&#x60; is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly. | [optional] 
**severity** | **str** | The severity value of the alert. Alert Center will set this field at alert creation time, default&#39;s to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW | [optional] 
**status** | **str** | The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED | [optional] 
**update_time** | **str** | Output only. The time this metadata was last updated. | [optional] 

## Example

```python
from openapi_client.models.alert_metadata import AlertMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AlertMetadata from a JSON string
alert_metadata_instance = AlertMetadata.from_json(json)
# print the JSON string representation of the object
print(AlertMetadata.to_json())

# convert the object into a dict
alert_metadata_dict = alert_metadata_instance.to_dict()
# create an instance of AlertMetadata from a dict
alert_metadata_from_dict = AlertMetadata.from_dict(alert_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


