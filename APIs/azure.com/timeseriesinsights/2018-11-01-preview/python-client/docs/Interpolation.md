# Interpolation

The interpolation operation to be performed on the raw data points. Currently, only sampling of interpolated time series is allowed. Allowed aggregate function - eg: left($value). Can be null if no interpolation needs to be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boundary** | [**InterpolationBoundary**](InterpolationBoundary.md) |  | [optional] 
**kind** | **str** | The type of interpolation technique : \&quot;Linear\&quot; or \&quot;Step\&quot;. | [optional] 

## Example

```python
from openapi_client.models.interpolation import Interpolation

# TODO update the JSON string below
json = "{}"
# create an instance of Interpolation from a JSON string
interpolation_instance = Interpolation.from_json(json)
# print the JSON string representation of the object
print(Interpolation.to_json())

# convert the object into a dict
interpolation_dict = interpolation_instance.to_dict()
# create an instance of Interpolation from a dict
interpolation_from_dict = Interpolation.from_dict(interpolation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


