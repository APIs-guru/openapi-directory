export var ConnectionStateEnum;
(function (ConnectionStateEnum) {
    ConnectionStateEnum["Ordering"] = "ordering";
    ConnectionStateEnum["Requested"] = "requested";
    ConnectionStateEnum["Pending"] = "pending";
    ConnectionStateEnum["Available"] = "available";
    ConnectionStateEnum["Down"] = "down";
    ConnectionStateEnum["Deleting"] = "deleting";
    ConnectionStateEnum["Deleted"] = "deleted";
    ConnectionStateEnum["Rejected"] = "rejected";
    ConnectionStateEnum["Unknown"] = "unknown";
})(ConnectionStateEnum || (ConnectionStateEnum = {}));
