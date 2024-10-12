# GoogleCloudApigeeV1ApiDoc

`ApiDoc` represents an API catalog item. Catalog items are used in two ways in a portal: - Users can browse and interact with a visual representation of the API documentation - The `api_product_name` field provides a link to a backing API product. Through this link, portal users can create and manage developer apps linked to one or more API products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anon_allowed** | **bool** | Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), this flag is ignored; instead visibility must be further managed in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)). | [optional] 
**api_product_name** | **str** | Required. Immutable. The &#x60;name&#x60; field of the associated [API product](/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). A portal may have only one catalog item associated with a given API product. | [optional] 
**category_ids** | **List[str]** | Optional. The IDs of the API categories to which this catalog item belongs. | [optional] 
**description** | **str** | Optional. Description of the catalog item. Max length is 10,000 characters. | [optional] 
**edge_api_product_name** | **str** | Optional. Immutable. DEPRECATED: use the &#x60;apiProductName&#x60; field instead | [optional] 
**graphql_endpoint_url** | **str** | Optional. DEPRECATED: manage documentation through the &#x60;getDocumentation&#x60; and &#x60;updateDocumentation&#x60; methods | [optional] 
**graphql_schema** | **str** | Optional. DEPRECATED: manage documentation through the &#x60;getDocumentation&#x60; and &#x60;updateDocumentation&#x60; methods | [optional] 
**graphql_schema_display_name** | **str** | Optional. DEPRECATED: manage documentation through the &#x60;getDocumentation&#x60; and &#x60;updateDocumentation&#x60; methods | [optional] 
**id** | **str** | Output only. The ID of the catalog item. | [optional] [readonly] 
**image_url** | **str** | Optional. Location of the image used for the catalog item in the catalog. For portal files, this can have the format &#x60;/files/{filename}&#x60;. Max length is 2,083 characters. | [optional] 
**modified** | **str** | Output only. Time the catalog item was last modified in milliseconds since epoch. | [optional] [readonly] 
**published** | **bool** | Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), the visibility must be further managed in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)) before it can be visible to any users. If not enrolled in the audience management feature, the visibility is further managed by the &#x60;anonAllowed&#x60; flag. | [optional] 
**require_callback_url** | **bool** | Optional. Whether a callback URL is required when this catalog item&#39;s API product is enabled in a developer app. When true, a portal user will be required to input a URL when managing the app (this is typically used for the app&#39;s OAuth flow). | [optional] 
**site_id** | **str** | Output only. The ID of the parent portal. | [optional] [readonly] 
**spec_id** | **str** | Optional. DEPRECATED: DO NOT USE | [optional] 
**title** | **str** | Required. The user-facing name of the catalog item. &#x60;title&#x60; must be a non-empty string with a max length of 255 characters. | [optional] 
**visibility** | **bool** | Optional. DEPRECATED: use the &#x60;published&#x60; field instead | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_doc import GoogleCloudApigeeV1ApiDoc

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiDoc from a JSON string
google_cloud_apigee_v1_api_doc_instance = GoogleCloudApigeeV1ApiDoc.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiDoc.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_doc_dict = google_cloud_apigee_v1_api_doc_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiDoc from a dict
google_cloud_apigee_v1_api_doc_from_dict = GoogleCloudApigeeV1ApiDoc.from_dict(google_cloud_apigee_v1_api_doc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


