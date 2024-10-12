# AssessmentDetails

Assessment properties that can be shared by various publishers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_id** | **str** | Gets or sets the id of the assessment done on the machine. | [optional] 
**bios_id** | **str** | Gets or sets the BIOS ID of the machine. | [optional] 
**enqueue_time** | **str** | Gets or sets the time the message was enqueued. | [optional] 
**extended_info** | **Dict[str, str]** | Gets or sets the ISV specific extended information. | [optional] 
**fabric_type** | **str** | Gets or sets the fabric type. | [optional] 
**fqdn** | **str** | Gets or sets the FQDN of the machine. | [optional] 
**ip_addresses** | **List[str]** | Gets or sets the list of IP addresses of the machine. IP addresses could be IP V4 or IP V6. | [optional] 
**last_updated_time** | **datetime** | Gets or sets the time of the last modification of the machine details. | [optional] 
**mac_addresses** | **List[str]** | Gets or sets the list of MAC addresses of the machine. | [optional] 
**machine_id** | **str** | Gets or sets the unique identifier of the machine. | [optional] 
**machine_manager_id** | **str** | Gets or sets the unique identifier of the virtual machine manager(vCenter/VMM). | [optional] 
**machine_name** | **str** | Gets or sets the name of the machine. | [optional] 
**solution_name** | **str** | Gets or sets the name of the solution that sent the data. | [optional] 
**target_storage_type** | **Dict[str, str]** | Gets or sets the target storage type. | [optional] 
**target_vm_location** | **str** | Gets or sets the target VM location. | [optional] 
**target_vm_size** | **str** | Gets or sets the target VM size. | [optional] 

## Example

```python
from openapi_client.models.assessment_details import AssessmentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentDetails from a JSON string
assessment_details_instance = AssessmentDetails.from_json(json)
# print the JSON string representation of the object
print(AssessmentDetails.to_json())

# convert the object into a dict
assessment_details_dict = assessment_details_instance.to_dict()
# create an instance of AssessmentDetails from a dict
assessment_details_from_dict = AssessmentDetails.from_dict(assessment_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


