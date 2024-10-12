# AwsProperties

Connection properties specific to Amazon Web Services (AWS).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_role** | [**AwsAccessRole**](AwsAccessRole.md) |  | [optional] 

## Example

```python
from openapi_client.models.aws_properties import AwsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AwsProperties from a JSON string
aws_properties_instance = AwsProperties.from_json(json)
# print the JSON string representation of the object
print(AwsProperties.to_json())

# convert the object into a dict
aws_properties_dict = aws_properties_instance.to_dict()
# create an instance of AwsProperties from a dict
aws_properties_from_dict = AwsProperties.from_dict(aws_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


