# VpcServiceControls

Response for the get VPC Service Controls request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Output only. Indicates whether the VPC Service Controls are enabled or disabled for the connection. If the consumer called the EnableVpcServiceControls method, then this is true. If the consumer called DisableVpcServiceControls, then this is false. The default is false. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vpc_service_controls import VpcServiceControls

# TODO update the JSON string below
json = "{}"
# create an instance of VpcServiceControls from a JSON string
vpc_service_controls_instance = VpcServiceControls.from_json(json)
# print the JSON string representation of the object
print(VpcServiceControls.to_json())

# convert the object into a dict
vpc_service_controls_dict = vpc_service_controls_instance.to_dict()
# create an instance of VpcServiceControls from a dict
vpc_service_controls_from_dict = VpcServiceControls.from_dict(vpc_service_controls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


