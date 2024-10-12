# FitDescriptor

Describes the fit level of an asset for migration to a specific target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fit_level** | **str** | Fit level. | [optional] 

## Example

```python
from openapi_client.models.fit_descriptor import FitDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of FitDescriptor from a JSON string
fit_descriptor_instance = FitDescriptor.from_json(json)
# print the JSON string representation of the object
print(FitDescriptor.to_json())

# convert the object into a dict
fit_descriptor_dict = fit_descriptor_instance.to_dict()
# create an instance of FitDescriptor from a dict
fit_descriptor_from_dict = FitDescriptor.from_dict(fit_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


