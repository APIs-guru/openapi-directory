# AwsSourceDetails

AwsSourceDetails message describes a specific source details for the AWS source type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key_creds** | [**AccessKeyCredentials**](AccessKeyCredentials.md) |  | [optional] 
**aws_region** | **str** | Immutable. The AWS region that the source VMs will be migrated from. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**inventory_security_group_names** | **List[str]** | AWS security group names to limit the scope of the source inventory. | [optional] 
**inventory_tag_list** | [**List[Tag]**](Tag.md) | AWS resource tags to limit the scope of the source inventory. | [optional] 
**migration_resources_user_tags** | **Dict[str, str]** | User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix &#x60;m2vm&#x60;. | [optional] 
**public_ip** | **str** | Output only. The source&#39;s public IP. All communication initiated by this source will originate from this IP. | [optional] [readonly] 
**state** | **str** | Output only. State of the source as determined by the health check. | [optional] [readonly] 

## Example

```python
from openapi_client.models.aws_source_details import AwsSourceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AwsSourceDetails from a JSON string
aws_source_details_instance = AwsSourceDetails.from_json(json)
# print the JSON string representation of the object
print(AwsSourceDetails.to_json())

# convert the object into a dict
aws_source_details_dict = aws_source_details_instance.to_dict()
# create an instance of AwsSourceDetails from a dict
aws_source_details_from_dict = AwsSourceDetails.from_dict(aws_source_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


