# GoogleCloudDatacatalogV1beta1PolicyTag

Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag \"Geolocation\" contains three child policy tags: \"LatLong\", \"City\", and \"ZipCode\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_policy_tags** | **List[str]** | Output only. Resource names of child policy tags of this policy tag. | [optional] [readonly] 
**description** | **str** | Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description. | [optional] 
**display_name** | **str** | Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. | [optional] 
**name** | **str** | Identifier. Resource name of this policy tag, whose format is: \&quot;projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}\&quot;. | [optional] 
**parent_policy_tag** | **str** | Resource name of this policy tag&#39;s parent policy tag (e.g. for the \&quot;LatLong\&quot; policy tag in the example above, this field contains the resource name of the \&quot;Geolocation\&quot; policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the \&quot;Geolocation\&quot; policy tag in the example above). If not set, defaults to an empty string. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_policy_tag import GoogleCloudDatacatalogV1beta1PolicyTag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1PolicyTag from a JSON string
google_cloud_datacatalog_v1beta1_policy_tag_instance = GoogleCloudDatacatalogV1beta1PolicyTag.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1PolicyTag.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_policy_tag_dict = google_cloud_datacatalog_v1beta1_policy_tag_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1PolicyTag from a dict
google_cloud_datacatalog_v1beta1_policy_tag_from_dict = GoogleCloudDatacatalogV1beta1PolicyTag.from_dict(google_cloud_datacatalog_v1beta1_policy_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


