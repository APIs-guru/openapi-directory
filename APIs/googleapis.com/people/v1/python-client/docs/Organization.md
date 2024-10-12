# Organization

A person's past or current organization. Overlapping date ranges are permitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_center** | **str** | The person&#39;s cost center at the organization. | [optional] 
**current** | **bool** | True if the organization is the person&#39;s current organization; false if the organization is a past organization. | [optional] 
**department** | **str** | The person&#39;s department at the organization. | [optional] 
**domain** | **str** | The domain name associated with the organization; for example, &#x60;google.com&#x60;. | [optional] 
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**formatted_type** | **str** | Output only. The type of the organization translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**full_time_equivalent_millipercent** | **int** | The person&#39;s full-time equivalent millipercent within the organization (100000 &#x3D; 100%). | [optional] 
**job_description** | **str** | The person&#39;s job description at the organization. | [optional] 
**location** | **str** | The location of the organization office the person works at. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**name** | **str** | The name of the organization. | [optional] 
**phonetic_name** | **str** | The phonetic name of the organization. | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**symbol** | **str** | The symbol associated with the organization; for example, a stock ticker symbol, abbreviation, or acronym. | [optional] 
**title** | **str** | The person&#39;s job title at the organization. | [optional] 
**type** | **str** | The type of the organization. The type can be custom or one of these predefined values: * &#x60;work&#x60; * &#x60;school&#x60; | [optional] 

## Example

```python
from openapi_client.models.organization import Organization

# TODO update the JSON string below
json = "{}"
# create an instance of Organization from a JSON string
organization_instance = Organization.from_json(json)
# print the JSON string representation of the object
print(Organization.to_json())

# convert the object into a dict
organization_dict = organization_instance.to_dict()
# create an instance of Organization from a dict
organization_from_dict = Organization.from_dict(organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


