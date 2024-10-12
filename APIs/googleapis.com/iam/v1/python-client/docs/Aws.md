# Aws

Represents an Amazon Web Services identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Required. The AWS account ID. | [optional] 

## Example

```python
from openapi_client.models.aws import Aws

# TODO update the JSON string below
json = "{}"
# create an instance of Aws from a JSON string
aws_instance = Aws.from_json(json)
# print the JSON string representation of the object
print(Aws.to_json())

# convert the object into a dict
aws_dict = aws_instance.to_dict()
# create an instance of Aws from a dict
aws_from_dict = Aws.from_dict(aws_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


