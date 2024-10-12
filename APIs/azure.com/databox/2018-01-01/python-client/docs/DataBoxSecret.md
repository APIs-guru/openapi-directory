# DataBoxSecret

The secrets related to a DataBox.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_credential_details** | [**List[AccountCredentialDetails]**](AccountCredentialDetails.md) | Per account level access credentials. | [optional] [readonly] 
**device_password** | **str** | Password for out of the box experience on device. | [optional] [readonly] 
**device_serial_number** | **str** | Serial number of the assigned device. | [optional] [readonly] 
**encoded_validation_cert_pub_key** | **str** | The base 64 encoded public key to authenticate with the device | [optional] [readonly] 
**network_configurations** | [**List[ApplianceNetworkConfiguration]**](ApplianceNetworkConfiguration.md) | Network configuration of the appliance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_secret import DataBoxSecret

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxSecret from a JSON string
data_box_secret_instance = DataBoxSecret.from_json(json)
# print the JSON string representation of the object
print(DataBoxSecret.to_json())

# convert the object into a dict
data_box_secret_dict = data_box_secret_instance.to_dict()
# create an instance of DataBoxSecret from a dict
data_box_secret_from_dict = DataBoxSecret.from_dict(data_box_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


