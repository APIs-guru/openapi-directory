# VpcAccessConnector

VPC access connector specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_setting** | **str** | The egress setting for the connector, controlling what traffic is diverted through it. | [optional] 
**name** | **str** | Full Serverless VPC Access Connector name e.g. projects/my-project/locations/us-central1/connectors/c1. | [optional] 

## Example

```python
from openapi_client.models.vpc_access_connector import VpcAccessConnector

# TODO update the JSON string below
json = "{}"
# create an instance of VpcAccessConnector from a JSON string
vpc_access_connector_instance = VpcAccessConnector.from_json(json)
# print the JSON string representation of the object
print(VpcAccessConnector.to_json())

# convert the object into a dict
vpc_access_connector_dict = vpc_access_connector_instance.to_dict()
# create an instance of VpcAccessConnector from a dict
vpc_access_connector_from_dict = VpcAccessConnector.from_dict(vpc_access_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


