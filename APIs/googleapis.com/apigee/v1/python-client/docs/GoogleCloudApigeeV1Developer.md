# GoogleCloudApigeeV1Developer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | Access type. | [optional] 
**app_family** | **str** | Developer app family. | [optional] 
**apps** | **List[str]** | List of apps associated with the developer. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | Optional. Developer attributes (name/value pairs). The custom attribute limit is 18. | [optional] 
**companies** | **List[str]** | List of companies associated with the developer. | [optional] 
**created_at** | **str** | Output only. Time at which the developer was created in milliseconds since epoch. | [optional] [readonly] 
**developer_id** | **str** | ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time. | [optional] 
**email** | **str** | Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only. | [optional] 
**first_name** | **str** | Required. First name of the developer. | [optional] 
**last_modified_at** | **str** | Output only. Time at which the developer was last modified in milliseconds since epoch. | [optional] [readonly] 
**last_name** | **str** | Required. Last name of the developer. | [optional] 
**organization_name** | **str** | Output only. Name of the Apigee organization in which the developer resides. | [optional] [readonly] 
**status** | **str** | Output only. Status of the developer. Valid values are &#x60;active&#x60; and &#x60;inactive&#x60;. | [optional] [readonly] 
**user_name** | **str** | Required. User name of the developer. Not used by Apigee hybrid. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_developer import GoogleCloudApigeeV1Developer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Developer from a JSON string
google_cloud_apigee_v1_developer_instance = GoogleCloudApigeeV1Developer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Developer.to_json())

# convert the object into a dict
google_cloud_apigee_v1_developer_dict = google_cloud_apigee_v1_developer_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Developer from a dict
google_cloud_apigee_v1_developer_from_dict = GoogleCloudApigeeV1Developer.from_dict(google_cloud_apigee_v1_developer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


