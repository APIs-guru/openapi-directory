package shared




type ActionEnum string

const (
    ActionEnumClipboardCopyFromLocalDevice ActionEnum = "CLIPBOARD_COPY_FROM_LOCAL_DEVICE"
ActionEnumClipboardCopyToLocalDevice ActionEnum = "CLIPBOARD_COPY_TO_LOCAL_DEVICE"
ActionEnumFileUpload ActionEnum = "FILE_UPLOAD"
ActionEnumFileDownload ActionEnum = "FILE_DOWNLOAD"
ActionEnumPrintingToLocalDevice ActionEnum = "PRINTING_TO_LOCAL_DEVICE"
ActionEnumDomainPasswordSignin ActionEnum = "DOMAIN_PASSWORD_SIGNIN"
ActionEnumDomainSmartCardSignin ActionEnum = "DOMAIN_SMART_CARD_SIGNIN"
)


