# DefaultResponseDTOOfPackageSearchDTOResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_status** | **bool** | Active Status  | [optional] 
**addon_fee** | **float** | sum of addon fees. incoming values for this filed will ignore.              | [optional] 
**apply_for_all_gyms** | **bool** | Boolean value to indicate wheather package is available in all the gyms.              | [optional] 
**binding_period** | **int** | Range of period a member is bound to the contract if he/she choose this package.              | [optional] 
**created_date** | **datetime** | Package created DateTime.              | [optional] 
**created_user** | **str** | Package created user.              | [optional] 
**description** | **str** | Common descriptions about package.If there are more instructions can be stored as comma separated values.              | [optional] 
**features** | **str** | What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.              | [optional] 
**free_months** | **int** | No of months gym member can come without payments.              | [optional] 
**member_can_remove_add_ons** | **bool** | Boolean value to indicate member can remove already added addons if he choose this package.              | [optional] 
**modified_date** | **datetime** | Package last modified DateTime.              | [optional] 
**modified_user** | **str** | Package last modified user.              | [optional] 
**monthly_fee** | **float** | Monthly installment fee if package is not fixed visit. addition of the servicefee and addon fees divided by binding period.              | [optional] 
**number_of_visits** | **int** | No of visits for fixed package  | [optional] 
**package_id** | **int** |  | [optional] 
**package_name** | **str** |  | [optional] 
**package_number** | **int** |  | [optional] 
**package_type** | **str** | Package type can be either fixed visit or unlimited.              | [optional] 
**registration_fee** | **float** | Registartion fee for the package at a gym.              | [optional] 
**service_fee** | **float** | total Service charge of the package for entire period.              | [optional] 
**tags** | **str** | Comma separated string values in case of need of maintain some labels kind of stuff relevant to the package.              | [optional] 
**total_count** | **int** | total number of recode for particular search  | [optional] 
**total_price** | **float** | total price for the package including Addon fees, service fee and registration fee. incoming values for this field will ignore.              | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_package_search_dto_result import DefaultResponseDTOOfPackageSearchDTOResult

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfPackageSearchDTOResult from a JSON string
default_response_dtoof_package_search_dto_result_instance = DefaultResponseDTOOfPackageSearchDTOResult.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfPackageSearchDTOResult.to_json())

# convert the object into a dict
default_response_dtoof_package_search_dto_result_dict = default_response_dtoof_package_search_dto_result_instance.to_dict()
# create an instance of DefaultResponseDTOOfPackageSearchDTOResult from a dict
default_response_dtoof_package_search_dto_result_from_dict = DefaultResponseDTOOfPackageSearchDTOResult.from_dict(default_response_dtoof_package_search_dto_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


