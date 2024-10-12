# Transform

Strategy where signature and field values are verified, trasnformed and then token si re-signed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algo_settings** | [**GlobalJwtVerifierAlgoSettings**](GlobalJwtVerifierAlgoSettings.md) |  | 
**transform_settings** | [**TransformSettings**](TransformSettings.md) |  | [optional] 
**type** | **str** | String with value Transform | 
**verification_settings** | [**VerificationSettings**](VerificationSettings.md) |  | 

## Example

```python
from openapi_client.models.transform import Transform

# TODO update the JSON string below
json = "{}"
# create an instance of Transform from a JSON string
transform_instance = Transform.from_json(json)
# print the JSON string representation of the object
print(Transform.to_json())

# convert the object into a dict
transform_dict = transform_instance.to_dict()
# create an instance of Transform from a dict
transform_from_dict = Transform.from_dict(transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


