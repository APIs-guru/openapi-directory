# GoogleCloudRecommenderV1Operation

Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Type of this operation. Contains one of &#39;add&#39;, &#39;remove&#39;, &#39;replace&#39;, &#39;move&#39;, &#39;copy&#39;, &#39;test&#39; and custom operations. This field is case-insensitive and always populated. | [optional] 
**path** | **str** | Path to the target field being operated on. If the operation is at the resource level, then path should be \&quot;/\&quot;. This field is always populated. | [optional] 
**path_filters** | **Dict[str, object]** | Set of filters to apply if &#x60;path&#x60; refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: &#x60;&#x60;&#x60; { \&quot;/versions/*/name\&quot; : \&quot;it-123\&quot; \&quot;/versions/*/targetSize/percent\&quot;: 20 } &#x60;&#x60;&#x60; * Example: &#x60;&#x60;&#x60; { \&quot;/bindings/*/role\&quot;: \&quot;roles/owner\&quot; \&quot;/bindings/*/condition\&quot; : null } &#x60;&#x60;&#x60; * Example: &#x60;&#x60;&#x60; { \&quot;/bindings/*/role\&quot;: \&quot;roles/owner\&quot; \&quot;/bindings/*/members/*\&quot; : [\&quot;x@example.com\&quot;, \&quot;y@example.com\&quot;] } &#x60;&#x60;&#x60; When both path_filters and path_value_matchers are set, an implicit AND must be performed. | [optional] 
**path_value_matchers** | [**Dict[str, GoogleCloudRecommenderV1ValueMatcher]**](GoogleCloudRecommenderV1ValueMatcher.md) | Similar to path_filters, this contains set of filters to apply if &#x60;path&#x60; field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed. | [optional] 
**resource** | **str** | Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo. | [optional] 
**resource_type** | **str** | Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance | [optional] 
**source_path** | **str** | Can be set with action &#39;copy&#39; or &#39;move&#39; to indicate the source field within resource or source_resource, ignored if provided for other operation types. | [optional] 
**source_resource** | **str** | Can be set with action &#39;copy&#39; to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action &#x3D; &#39;copy&#39;, path &#x3D; \&quot;/\&quot;, from &#x3D; \&quot;/\&quot;, source_resource &#x3D; and resource_name &#x3D; . This field is empty for all other values of &#x60;action&#x60;. | [optional] 
**value** | **object** | Value for the &#x60;path&#x60; field. Will be set for actions:&#39;add&#39;/&#39;replace&#39;. Maybe set for action: &#39;test&#39;. Either this or &#x60;value_matcher&#x60; will be set for &#39;test&#39; operation. An exact match must be performed. | [optional] 
**value_matcher** | [**GoogleCloudRecommenderV1ValueMatcher**](GoogleCloudRecommenderV1ValueMatcher.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_operation import GoogleCloudRecommenderV1Operation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1Operation from a JSON string
google_cloud_recommender_v1_operation_instance = GoogleCloudRecommenderV1Operation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1Operation.to_json())

# convert the object into a dict
google_cloud_recommender_v1_operation_dict = google_cloud_recommender_v1_operation_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1Operation from a dict
google_cloud_recommender_v1_operation_from_dict = GoogleCloudRecommenderV1Operation.from_dict(google_cloud_recommender_v1_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


