package shared

type PrefixListStateEnum string

const (
	PrefixListStateEnumCreateInProgress  PrefixListStateEnum = "create-in-progress"
	PrefixListStateEnumCreateComplete    PrefixListStateEnum = "create-complete"
	PrefixListStateEnumCreateFailed      PrefixListStateEnum = "create-failed"
	PrefixListStateEnumModifyInProgress  PrefixListStateEnum = "modify-in-progress"
	PrefixListStateEnumModifyComplete    PrefixListStateEnum = "modify-complete"
	PrefixListStateEnumModifyFailed      PrefixListStateEnum = "modify-failed"
	PrefixListStateEnumRestoreInProgress PrefixListStateEnum = "restore-in-progress"
	PrefixListStateEnumRestoreComplete   PrefixListStateEnum = "restore-complete"
	PrefixListStateEnumRestoreFailed     PrefixListStateEnum = "restore-failed"
	PrefixListStateEnumDeleteInProgress  PrefixListStateEnum = "delete-in-progress"
	PrefixListStateEnumDeleteComplete    PrefixListStateEnum = "delete-complete"
	PrefixListStateEnumDeleteFailed      PrefixListStateEnum = "delete-failed"
)
