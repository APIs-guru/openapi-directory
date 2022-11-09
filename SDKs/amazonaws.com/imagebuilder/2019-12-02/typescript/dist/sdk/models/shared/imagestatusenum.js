export var ImageStatusEnum;
(function (ImageStatusEnum) {
    ImageStatusEnum["Pending"] = "PENDING";
    ImageStatusEnum["Creating"] = "CREATING";
    ImageStatusEnum["Building"] = "BUILDING";
    ImageStatusEnum["Testing"] = "TESTING";
    ImageStatusEnum["Distributing"] = "DISTRIBUTING";
    ImageStatusEnum["Integrating"] = "INTEGRATING";
    ImageStatusEnum["Available"] = "AVAILABLE";
    ImageStatusEnum["Cancelled"] = "CANCELLED";
    ImageStatusEnum["Failed"] = "FAILED";
    ImageStatusEnum["Deprecated"] = "DEPRECATED";
    ImageStatusEnum["Deleted"] = "DELETED";
})(ImageStatusEnum || (ImageStatusEnum = {}));
