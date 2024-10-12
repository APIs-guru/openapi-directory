# VpcConnectorInfo

For display only. Metadata associated with a VPC connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a VPC connector. | [optional] 
**location** | **str** | Location in which the VPC connector is deployed. | [optional] 
**uri** | **str** | URI of a VPC connector. | [optional] 

## Example

```python
from openapi_client.models.vpc_connector_info import VpcConnectorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VpcConnectorInfo from a JSON string
vpc_connector_info_instance = VpcConnectorInfo.from_json(json)
# print the JSON string representation of the object
print(VpcConnectorInfo.to_json())

# convert the object into a dict
vpc_connector_info_dict = vpc_connector_info_instance.to_dict()
# create an instance of VpcConnectorInfo from a dict
vpc_connector_info_from_dict = VpcConnectorInfo.from_dict(vpc_connector_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


