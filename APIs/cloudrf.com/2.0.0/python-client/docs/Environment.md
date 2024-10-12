# Environment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cll** | **int** | Clutter loss. 0&#x3D;None/DSM only, 1&#x3D;Hard / LOS mode, 2&#x3D;Soft / NLOS mode | [optional] [default to 2]
**clm** | **int** | Clutter mode. 0&#x3D;None/DSM only, 1&#x3D;System &amp; custom clutter, 2&#x3D;Custom clutter only | [optional] [default to 1]
**mat** | **float** | Clutter attenuation override in dB/m based on a tree block OR hollow building. Light foliage&#x3D;0.1dB/m, brick&#x3D;1.0dB/m, concrete&#x3D;5dB/m | [optional] [default to 0.25]

## Example

```python
from openapi_client.models.environment import Environment

# TODO update the JSON string below
json = "{}"
# create an instance of Environment from a JSON string
environment_instance = Environment.from_json(json)
# print the JSON string representation of the object
print(Environment.to_json())

# convert the object into a dict
environment_dict = environment_instance.to_dict()
# create an instance of Environment from a dict
environment_from_dict = Environment.from_dict(environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


