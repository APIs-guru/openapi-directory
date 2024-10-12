# AdministrationRegion

Describes information about a regional election administrative area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**election_administration_body** | [**AdministrativeBody**](AdministrativeBody.md) |  | [optional] 
**local_jurisdiction** | [**AdministrationRegion**](AdministrationRegion.md) |  | [optional] 
**name** | **str** | The name of the jurisdiction. | [optional] 
**sources** | [**List[Source]**](Source.md) | A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources. | [optional] 

## Example

```python
from openapi_client.models.administration_region import AdministrationRegion

# TODO update the JSON string below
json = "{}"
# create an instance of AdministrationRegion from a JSON string
administration_region_instance = AdministrationRegion.from_json(json)
# print the JSON string representation of the object
print(AdministrationRegion.to_json())

# convert the object into a dict
administration_region_dict = administration_region_instance.to_dict()
# create an instance of AdministrationRegion from a dict
administration_region_from_dict = AdministrationRegion.from_dict(administration_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


