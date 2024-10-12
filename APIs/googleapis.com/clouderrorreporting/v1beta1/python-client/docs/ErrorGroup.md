# ErrorGroup

Description of a group of similar error events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | An opaque identifier of the group. This field is assigned by the Error Reporting system and always populated. In the group resource name, the &#x60;group_id&#x60; is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). | [optional] 
**name** | **str** | The group resource name. Written as &#x60;projects/{projectID}/groups/{group_id}&#x60;. Example: &#x60;projects/my-project-123/groups/my-group&#x60; In the group resource name, the &#x60;group_id&#x60; is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). | [optional] 
**resolution_status** | **str** | Error group&#39;s resolution status. An unspecified resolution status will be interpreted as OPEN | [optional] 
**tracking_issues** | [**List[TrackingIssue]**](TrackingIssue.md) | Associated tracking issues. | [optional] 

## Example

```python
from openapi_client.models.error_group import ErrorGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroup from a JSON string
error_group_instance = ErrorGroup.from_json(json)
# print the JSON string representation of the object
print(ErrorGroup.to_json())

# convert the object into a dict
error_group_dict = error_group_instance.to_dict()
# create an instance of ErrorGroup from a dict
error_group_from_dict = ErrorGroup.from_dict(error_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


