# BookingEngineId

**booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made  *one of* the following: - `\"FreesaleBE\"` – *this* product will be confirmed immediately and the supplier will be sent a notification - `\"UnconditionalBE\"` - *this* product will be confirmed immediately and the supplier will not be notified - `\"DeferredCRMBE\"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services - `\"FreesaleOnRequestBE\"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.  If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `\"FreesaleOnRequestBE:OnRequest\"` or `\"FreesaleOnRequestBE:Freesold\"` depending on the travel date and the on-request period                         

## Enum

* `FREESALEBE` (value: `'FreesaleBE'`)

* `UNCONDITIONALBE` (value: `'UnconditionalBE'`)

* `DEFERREDCRMBE` (value: `'DeferredCRMBE'`)

* `FREESALEONREQUESTBE` (value: `'FreesaleOnRequestBE'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


