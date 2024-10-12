# DefaultResponseDTOOfPackageDTOResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_ons** | [**List[PackageItemDTO]**](PackageItemDTO.md) | Extra articles list added to the given package.              | [optional] 
**addon_fee** | **float** | sum of addon fees. incoming values for this filed will ignore.              | [optional] 
**apply_for_all_gyms** | **bool** | Boolean value to indicate wheather package is available in all the gyms.              | [optional] 
**available_gyms** | [**List[GymDTO]**](GymDTO.md) | Gyms list where this package is available.              | [optional] 
**binding_period** | **int** | Range of period a member is bound to the contract if he/she choose this package.              | [optional] 
**created_date** | **datetime** | Package created DateTime.              | [optional] 
**created_user** | **str** | Package created user.              | [optional] 
**description** | **str** | Common descriptions about package.If there are more instructions               can be stored as comma separated values.              | [optional] 
**end_date** | **datetime** | End date of the package.After that package is not valid for use.              | [optional] 
**expire_in_months** | **int** | No of months the fixed package is valid for sale              | [optional] 
**features** | **str** | What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.              | [optional] 
**free_months** | **int** | No of months gym member can come without payments.              | [optional] 
**instructions_to_gym_users** | **str** | Instruction to the gym members relevant to the package.              If there are more instructions can be stored as comma seperated values.              | [optional] 
**instructions_to_web_users** | **str** | Instruction to the MRM members relevant to the package.              If there are more instructions can be stored as comma seperated values.              | [optional] 
**is_active** | **bool** | Boolean value to indicate this package is still active or not.              | [optional] 
**is_atg** | **bool** | Boolean value to indicate ATG transaction from bank is applicable or not.              | [optional] 
**is_auto_renew** | **bool** | Boolean value to indicate the contract will auto renew after expiration               if this package would be chosen.              | [optional] 
**is_first_month_free** | **bool** | Boolean value to indicate if the first month charges is free.              | [optional] 
**is_registration_fee** | **bool** | Boolean value to indicate this package has registration fee or not.              | [optional] 
**is_rest_amount** | **bool** | Boolean value to indicate rest amount is applicable or not.              | [optional] 
**is_shown_in_mobile** | **bool** | Boolean value to indicate package is visible in Mobile App or not.              | [optional] 
**is_sponsor_package** | **bool** | Boolean value to indicate package can be sponsored or not by other party.              | [optional] 
**maximum_give_away_rest_amount** | **float** | If a member join the gym middle of a month via this package,               what is the maximum amount of price can be neglected from payment from the member.              | [optional] 
**member_can_add_add_ons** | **bool** | Boolean value to indicate member can add extra addons he wish if he choose this package.              | [optional] 
**member_can_leave_within_free_period** | **bool** | Boolean value to indicate if member can leave from contract within               free period if he/she choose this package.              | [optional] 
**member_can_remove_add_ons** | **bool** | Boolean value to indicate member can remove already added addons if he choose this package.              | [optional] 
**modified_date** | **datetime** | Package last modified DateTime.              | [optional] 
**modified_user** | **str** | Package last modified user.              | [optional] 
**monthly_fee** | **float** | Monthly installment fee if package is not fixed visit. addition of the servicefee and addon fees divided by binding period.              read only              | [optional] 
**next_package_number** | **int** | Next Package the contract continue after the binding period of this package.              | [optional] 
**number_of_installments** | **int** | Maximum Number of installment a member can divide the package price/cost to pay.              | [optional] 
**number_of_visits** | **int** | If package is fixed visit type, then how many visits are available for this package.              | [optional] 
**package_id** | **int** |  | [optional] 
**package_name** | **str** |  | 
**package_number** | **str** |  | [optional] 
**package_type** | **str** | Package type can be either fixed visit or unlimited.              | 
**per_visit_price** | **float** | Cost/Price of the single visit to gym.              | [optional] 
**registration_fee** | **float** | Registartion fee for the package at a gym.              read only              | 
**service_fee** | **float** | total Service charge of the package for entire period.              | 
**shown_in_web** | **bool** | Boolean value to show this package in MRM system or not.              | [optional] 
**start_date** | **datetime** | Start date of the package.              | [optional] 
**tags** | **str** | Comma separated string values in case of need of maintain some labels kind of               stuff relevant to the package.              | [optional] 
**total_price** | **float** | total price for the package including Addon fees, service fee and registration fee. incoming values for this field will ignore.              | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_package_dto_result import DefaultResponseDTOOfPackageDTOResult

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfPackageDTOResult from a JSON string
default_response_dtoof_package_dto_result_instance = DefaultResponseDTOOfPackageDTOResult.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfPackageDTOResult.to_json())

# convert the object into a dict
default_response_dtoof_package_dto_result_dict = default_response_dtoof_package_dto_result_instance.to_dict()
# create an instance of DefaultResponseDTOOfPackageDTOResult from a dict
default_response_dtoof_package_dto_result_from_dict = DefaultResponseDTOOfPackageDTOResult.from_dict(default_response_dtoof_package_dto_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


