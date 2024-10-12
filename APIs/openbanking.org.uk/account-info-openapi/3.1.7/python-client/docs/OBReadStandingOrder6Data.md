# OBReadStandingOrder6Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**standing_order** | [**List[OBStandingOrder6]**](OBStandingOrder6.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_standing_order6_data import OBReadStandingOrder6Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadStandingOrder6Data from a JSON string
ob_read_standing_order6_data_instance = OBReadStandingOrder6Data.from_json(json)
# print the JSON string representation of the object
print(OBReadStandingOrder6Data.to_json())

# convert the object into a dict
ob_read_standing_order6_data_dict = ob_read_standing_order6_data_instance.to_dict()
# create an instance of OBReadStandingOrder6Data from a dict
ob_read_standing_order6_data_from_dict = OBReadStandingOrder6Data.from_dict(ob_read_standing_order6_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


