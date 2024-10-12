# PositionOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**industry** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**size** | **str** |  | [optional] 
**ticker** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.position_organization import PositionOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of PositionOrganization from a JSON string
position_organization_instance = PositionOrganization.from_json(json)
# print the JSON string representation of the object
print(PositionOrganization.to_json())

# convert the object into a dict
position_organization_dict = position_organization_instance.to_dict()
# create an instance of PositionOrganization from a dict
position_organization_from_dict = PositionOrganization.from_dict(position_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


