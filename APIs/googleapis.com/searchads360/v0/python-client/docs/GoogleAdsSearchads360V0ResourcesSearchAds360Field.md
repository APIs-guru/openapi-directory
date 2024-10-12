# GoogleAdsSearchads360V0ResourcesSearchAds360Field

A field or resource (artifact) used by SearchAds360Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_resources** | **List[str]** | Output only. The names of all resources that are selectable with the described artifact. Fields from these resources do not segment metrics when included in search queries. This field is only set for artifacts whose category is RESOURCE. | [optional] [readonly] 
**category** | **str** | Output only. The category of the artifact. | [optional] [readonly] 
**data_type** | **str** | Output only. This field determines the operators that can be used with the artifact in WHERE clauses. | [optional] [readonly] 
**enum_values** | **List[str]** | Output only. Values the artifact can assume if it is a field of type ENUM. This field is only set for artifacts of category SEGMENT or ATTRIBUTE. | [optional] [readonly] 
**filterable** | **bool** | Output only. Whether the artifact can be used in a WHERE clause in search queries. | [optional] [readonly] 
**is_repeated** | **bool** | Output only. Whether the field artifact is repeated. | [optional] [readonly] 
**metrics** | **List[str]** | Output only. This field lists the names of all metrics that are selectable with the described artifact when it is used in the FROM clause. It is only set for artifacts whose category is RESOURCE. | [optional] [readonly] 
**name** | **str** | Output only. The name of the artifact. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the artifact. Artifact resource names have the form: &#x60;SearchAds360Fields/{name}&#x60; | [optional] [readonly] 
**segments** | **List[str]** | Output only. This field lists the names of all artifacts, whether a segment or another resource, that segment metrics when included in search queries and when the described artifact is used in the FROM clause. It is only set for artifacts whose category is RESOURCE. | [optional] [readonly] 
**selectable** | **bool** | Output only. Whether the artifact can be used in a SELECT clause in search queries. | [optional] [readonly] 
**selectable_with** | **List[str]** | Output only. The names of all resources, segments, and metrics that are selectable with the described artifact. | [optional] [readonly] 
**sortable** | **bool** | Output only. Whether the artifact can be used in a ORDER BY clause in search queries. | [optional] [readonly] 
**type_url** | **str** | Output only. The URL of proto describing the artifact&#39;s data type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_search_ads360_field import GoogleAdsSearchads360V0ResourcesSearchAds360Field

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesSearchAds360Field from a JSON string
google_ads_searchads360_v0_resources_search_ads360_field_instance = GoogleAdsSearchads360V0ResourcesSearchAds360Field.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesSearchAds360Field.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_search_ads360_field_dict = google_ads_searchads360_v0_resources_search_ads360_field_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesSearchAds360Field from a dict
google_ads_searchads360_v0_resources_search_ads360_field_from_dict = GoogleAdsSearchads360V0ResourcesSearchAds360Field.from_dict(google_ads_searchads360_v0_resources_search_ads360_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


