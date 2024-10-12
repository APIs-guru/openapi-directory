# EditionCapability

The database edition capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The edition name. | [optional] [readonly] 
**status** | [**CapabilityStatus**](CapabilityStatus.md) |  | [optional] 
**supported_service_level_objectives** | [**List[ServiceObjectiveCapability]**](ServiceObjectiveCapability.md) | The list of supported service objectives for the edition. | [optional] [readonly] 
**zone_redundant** | **bool** | Whether or not zone redundancy is supported for the edition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.edition_capability import EditionCapability

# TODO update the JSON string below
json = "{}"
# create an instance of EditionCapability from a JSON string
edition_capability_instance = EditionCapability.from_json(json)
# print the JSON string representation of the object
print(EditionCapability.to_json())

# convert the object into a dict
edition_capability_dict = edition_capability_instance.to_dict()
# create an instance of EditionCapability from a dict
edition_capability_from_dict = EditionCapability.from_dict(edition_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


