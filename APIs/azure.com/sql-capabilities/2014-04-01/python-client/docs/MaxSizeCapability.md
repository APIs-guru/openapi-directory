# MaxSizeCapability

The maximum size limits for a database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The maximum size of the database (see &#39;unit&#39; for the units). | [optional] [readonly] 
**status** | [**CapabilityStatus**](CapabilityStatus.md) |  | [optional] 
**unit** | **str** | The units that the limit is expressed in. | [optional] [readonly] 

## Example

```python
from openapi_client.models.max_size_capability import MaxSizeCapability

# TODO update the JSON string below
json = "{}"
# create an instance of MaxSizeCapability from a JSON string
max_size_capability_instance = MaxSizeCapability.from_json(json)
# print the JSON string representation of the object
print(MaxSizeCapability.to_json())

# convert the object into a dict
max_size_capability_dict = max_size_capability_instance.to_dict()
# create an instance of MaxSizeCapability from a dict
max_size_capability_from_dict = MaxSizeCapability.from_dict(max_size_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


