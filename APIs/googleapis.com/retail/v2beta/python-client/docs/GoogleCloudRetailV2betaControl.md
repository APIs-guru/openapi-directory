# GoogleCloudRetailV2betaControl

Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_serving_config_ids** | **List[str]** | Output only. List of serving config ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view. | [optional] [readonly] 
**display_name** | **str** | Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown. | [optional] 
**facet_spec** | [**GoogleCloudRetailV2betaSearchRequestFacetSpec**](GoogleCloudRetailV2betaSearchRequestFacetSpec.md) |  | [optional] 
**name** | **str** | Immutable. Fully qualified name &#x60;projects/*/locations/global/catalogs/*/controls/*&#x60; | [optional] 
**rule** | [**GoogleCloudRetailV2betaRule**](GoogleCloudRetailV2betaRule.md) |  | [optional] 
**search_solution_use_case** | **List[str]** | Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control. | [optional] 
**solution_types** | **List[str]** | Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only &#x60;SOLUTION_TYPE_SEARCH&#x60; value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_control import GoogleCloudRetailV2betaControl

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaControl from a JSON string
google_cloud_retail_v2beta_control_instance = GoogleCloudRetailV2betaControl.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaControl.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_control_dict = google_cloud_retail_v2beta_control_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaControl from a dict
google_cloud_retail_v2beta_control_from_dict = GoogleCloudRetailV2betaControl.from_dict(google_cloud_retail_v2beta_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


